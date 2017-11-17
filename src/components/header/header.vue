<template>
  <div class="header">
    <div class="wrap">
      <div class="top-header">
        <div class="logo">
          <a href="#">
            <h1>
              <span>Mayue</span>马跃
            </h1>
          </a>
        </div>
      </div>
      <!-- 导航beg -->
      <div class="top-nav clear">
        <!-- 菜单栏beg  -->
        <div class="left">
          <div class="nav">
            <ul class="nav-ul">
              <li class="nav-li" v-for="(item,index) in navlist" :key="index" @click="change(index)"  v-on:touchmove="show('aa')" v-on:mouseenter="show(true,index)" v-on:mouseleave="show(false,index)">
                <router-link class="nav-a" :to="item.link" :class="{active: index == selectindex}">{{item.name}}</router-link>
                <!-- <transition name="fade">
                                                                <ul class="nav-dropdown-ul" v-show="item.show">
                                                                  <li class="nav-dropdown-li" v-for="(citem,cindex) in item.cnavlist" :key="cindex" @click="change(cindex)">
                                                                    <router-link class="nav-dropdown-a" :to="citem.link">{{citem.name}}</router-link>
                                                                  </li>
                                                                </ul>
                                                              </transition> -->
                <dropdown :item="item" @test="test"></dropdown>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单栏  end-->

        <!-- 搜索框beg -->
        <div class="right">
          <div class="search clear">
            <form @submit.prevent="onsubmit">
              <input type="text" v-on:keyup="keyword" v-model="keys" class="text" />
              <input type="submit" value class="submit" />
            </form>
          </div>
        </div>
        <!-- 搜索框end -->

      </div>
      <!--导航 end -->
    </div>
  </div>
</template>

<script>
import dropdown from './dropdown/dropdown.vue';
import common from './../../../static/js/common.js';
var todo = null;
export default {
  data() {
    return {
      keys: 'aaa',
      navlist: [
        {
          name: '首页',
          link: '/index'
        },
        {
          name: 'demo',
          link: '/swiper',
          cnavlist: [
            {
              name: 'swiper',
              link: '/swiper'
            },
            {
              name: 'canvas',
              link: '/canvas'
            },
            {
              name: 'error',
              link: '/error'
            },
            {
              name: 'loading',
              link: '/loading'
            },
            {
              name: 'table',
              link: '/table'
            }
          ]
        },
        {
          name: 'FAQ',
          link: '/error',
          cnavlist: [
            {
              name: 'canvas',
              link: '/canvas'
            }
          ]
        },
        {
          name: '关于我们',
          link: '/about'
        }
      ],
      selectindex: 0
    };
  },
  methods: {
    change(index) {
      this.selectindex = index;
    },
    onsubmit() {
      if (!todo) {
        todo = common.debounce(function() {
          console.log('aaa');
        });
      }
      todo();
    },
    keyword() {},
    test() {
      console.log('test');
    },
    show(type, index) {
      if (!this.navlist[index].show) {
        this.$set(this.navlist[index], 'show', type);
      }
      this.navlist[index].show = type;
      var that = this;
      if (!type) {
        this.$root.Bus.$emit('hide');
        return;
      }
      var obj = {
        fn: function() {
          that.navlist[index].show = false;
        }
      };
      // 触发显示事件
      this.$root.Bus.$emit('show', obj);
    }
  },
  components: {
    dropdown
  }
};
</script>

<style lang='less'>
.header {
  background: rgba(29, 29, 29, 0.2);
  .wrap {
    width: 80%;
    margin: 0 auto; //设置水平居中
    .top-header {
      padding: 30px 0 20px 0;
      .logo {
        display: inline-block;
        a {
          display: block;
          h1 {
            font-size: 35px;
            color: #787979;
            text-transform: uppercase; //全部大写
            span {
              font-weight: 700;
              color: #fff;
            }
          }
        }
      }
    }
    .top-nav {
      background: #333333;
      border-bottom: 1px solid #333;
      border-radius: 5px 5px 0px 0px;
      .left {
        float: left;
        width: 60%;
        .nav {
          width: 100%;
          .nav-ul {
            display: flex;
            width: 100%;
            .nav-li {
              flex: 1;
              text-align: center;
              border-right: 1px solid #424242;
              position: relative;
              .nav-a {
                display: block;
                margin: 0;
                padding: 20px 0;
                width: 100%;
                font-size: 15px;
                font-weight: 700;
                color: #787979;
                text-transform: uppercase;
                box-sizing: border-box; //设置包括边框
                border-right: 1px solid #424242;
                transition: all 0.5s ease; //渐变
                &.active {
                  color: #fff;
                  font-size: 16px;
                  border-top: 4px solid #424242;
                  padding: 19px 0;
                }
                &:hover {
                  color: #fff;
                  font-size: 16px;
                  border-top: 4px solid #424242;
                  padding: 19px 0;
                }
              }

              .nav-dropdown-ul {
                z-index: 999;
                display: flex;
                width: 100%;
                flex-direction: column;
                position: absolute;
                background: #fff;
                transform: translate3d(0, 0, 0);
                &.fade-enter-active,
                &.fade-leave-active {
                  // z-index: -1;
                  transition: all 0.8s;
                  opacity: 1;
                }
                &.fade-enter,
                &.fade-leave-to {
                  opacity: 0; // transform: translate3d(0, -50%, 0);
                }

                .nav-dropdown-li {
                  flex: 1;
                  text-align: center;
                  .nav-dropdown-a {
                    display: block;
                    margin: 0;
                    padding: 5px 0;
                    width: 100%;
                    font-size: 15px;
                    font-weight: 700;
                    color: #787979;
                    text-transform: uppercase;
                    box-sizing: border-box; //设置包括边框
                    border-bottom: 1px solid #424242;
                    transition: all 0.5s ease; //渐变
                    &.active {
                      color: red;
                      font-size: 16px;
                    }
                    &:hover {
                      color: red;
                      font-size: 16px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .right {
        float: right;
        width: 25%;
        padding: 10px;
        .search {
          background: #1d1d1d;
          border-radius: 5px;
          position: relative;
          .text {
            border: none;
            background: none;
            outline: none;
            color: #dcdcdc;
            padding: 10px;
            font-size: 13px;
            font-family: "microsoft yahei", sans-serif;
            float: left;
            width: 75%;
          }
          .submit {
            position: absolute;
            right: 0;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 0px;
            margin: 0;

            width: 35px;
            height: 38px;
            background: url(./search-icon.png) no-repeat center;
            background-size: 20px 20px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .header {
    .wrap {
      width: 100%;
      .top-nav {
        .left {
          width: 100%;
          .nav {
            ul {
              li {
                a {
                  padding: 10px 0;
                }
              }
            }
          }
        }
        .right {
          display: none;
        }
      }
    }
  }
}
</style>
