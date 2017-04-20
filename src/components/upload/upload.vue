<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/20
 -->

<template>
  <div class="s-upload-wrap">
    <ul class="s-upload" :style="styles">
      <li class="s-upload-item" v-for="item in imagesList" :class="{'s-upload-loading': !item.url}">
        <img class="s-upload-img" :src="item.thumb">
      </li>
      <li class="s-upload-item s-upload-button">
        <input class="s-upload-input"
               type="file"
               id="s-upload-input"
               @change="chosenImg($event)"
               :multiple="multiple"
               :accept="accept">
      </li>
    </ul>
  </div>
</template>

<script>

  // token有效开始时间，toekn
  let startTime, token;

  export default {
    name: 'name',
    props: {
      accept: {
        type: String,
        default: 'image/jpg,image/jpeg,image/png'
      },
      width: {
        type: Number,
        default: 640
      },
      height: {
        type: Number,
        default: 400
      },
      multiple: Boolean,
      itemWidth: {
        type: Number,
        default: 140
      },
      quality: {
        type: Number,
        default: 0.7
      },
      format: {
        type: String,
        default: 'image/jpeg'
      },

      // token有效时间，单位豪秒
      expiry: {
        type: Number,
        default: 3000 * 1000
      },
      thumbWidth: {
        type: Number,
        default: 120
      },
      thumbHeight: {
        type: Number,
        default: 120
      },
      thumbQuality: {
        type: Number,
        default: 0.7
      },
      domain: {
        type: String,
        default: 'img.youximao.tv'
      }
    },
    data () {
      return {
        imagesList: [],
        styles: {}
      }
    },
    methods: {

      /**
       * 获取图片信息
       * @param img 图片
       * @param width 需要宽度
       * @param height 裁剪的高度
       * @return {Object} sWidth，sHeight：图片宽高，x，y剪切起点
       */
      getImageInfo (img, width, height) {

        // 剪切图片的长度，宽度，x坐标，y坐标
        let sWidth, sHeight, sX, sY;

        // 图片方向，1：水平（包括正方形），2：垂直
        const direction = img.naturalWidth >= img.naturalHeight ? 1 : 2;

        // 剪切图片长宽比例
        const proportion = width / height;

        // 获取剪切图片的长度宽度
        if (direction === 1) {
          sHeight = img.naturalHeight;
          sWidth = sHeight * proportion;
        } else {
          sWidth = img.naturalWidth;
          sHeight = sWidth / proportion;
        }

        // /2 居中裁剪
        sX = (img.naturalWidth - sWidth) / 2;
        sY = (img.naturalHeight - sHeight) / 2;

        return {sWidth, sHeight, sX, sY};
      },

      /**
       * 获取图片信息
       * @param files 图片文件
       * @param width 图片宽度
       * @param height 图片高度
       * @param format 图片格式
       * @param quality 图片质量
       * @return {Promise} 返回base64位编码的文件
       */
      generateDataURL (files, width, height, format, quality) {

        return new Promise (resolve => {

          let dataRUL = '';

          // 生成图片，画布节点
          const images = document.createElement('img');
          const canvas = document.createElement('canvas');

          const context = canvas.getContext('2d');
          canvas.width = width;
          canvas.height = height;

          const reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = () => {
            images.src = reader.result;
            images.onload = () => {

              // 获取图片的剪切信息
              const shear = this.getImageInfo(images, width, height);

              // 把图片画到画布上，压缩，剪切等操作
              context.drawImage(images, shear.sX, shear.sY, shear.sWidth, shear.sHeight, 0, 0, width, height);

              // 生成dataRUL并返回
              resolve(canvas.toDataURL(format, quality));
            }
          };

        });
      },

      /**
       * 选中图片
       * @param $event 图片事件
       * @return {Boolean} 退出
       */
      chosenImg ($event) {

        // 列表中已经存在相同名称的图片所以退出
        if (this.imagesList.find(item => item.name === $event.target.value)) return false;

        this
          .generateDataURL($event.target.files, this.width, this.height, this.format, this.quality)
          .then(upload => {

            this
              .generateDataURL($event.target.files, this.thumbWidth, this.thumbHeight, this.format, this.thumbQuality)
              .then(thumb => {

                const obj = {
                  upload,
                  thumb,
                  url: '',
                  name: $event.target.value
                };

                // 增加到图片列表中
                this.imagesList.push(obj);

                // 执行上传方法
                this.upload(obj);

                // 重置列表宽度
                this.styles.width = (this.imagesList.length + 1) * this.itemWidth / 100 + 'rem';

              })

          });
      },

      // 获取七牛token
      getQiniuToken () {
        return new Promise((resolve) => {
          if (token && startTime && (new Date() - startTime) <= this.expiry) resolve();
          this
            .$http
            .post('/h5/qiniu/getUploadToken')
            .then(response => {
              if (response.body.code !== '000') return false;
              startTime = new Date();
              token = response.body.data.uploadToken;
              resolve();
            })
        });
      },

      upload (obj) {
        this
          .getQiniuToken()
          .then(() => {

            const upload = obj.upload.replace(/data:image\/.+;base64,/, '');
            this
              .$http
              .post('//up.qiniu.com/putb64/-1/', upload, {
                headers: {
                  'Content-Type': 'application/octet-stream',
                  'Authorization': 'UpToken ' + token
                }
              })
              .then(response => {
                if (response && response.key) {
                  obj.url = `//${this.domain}/${response.key}`;
                }
              })

          });
      }
    },
    mounted () {
    }
  }
</script>
