<template>
    <div class="main">
        <h1 class="title">
            <router-link to="/good">近期文章>></router-link>
        </h1>
        <div class="content">
            <div class="item">
                <h3 class="title">
                    <span>标题</span>
                    <br> 副标题
                </h3>
                <p>摘要（具体内容显示在详情）</p>
                <div class="button">
                    <span>
                        <router-link to="/good">MORE</router-link>
                    </span>
                </div>
            </div>

            <div class="item">
                <h3 class="title">
                    <span>mayue</span>
                    <br> Title
                </h3>
                <p>imperdiet venenatis ligula, non laoreet quam imper lorem ipsum.</p>
                <div class="button">
                    <span>
                        <router-link to="/good">MORE</router-link>
                    </span>
                </div>
            </div>

            <div class="item">
                <h3 class="title">
                    <span>mayue</span>
                    <br> Title
                </h3>
                <p>Nam vestibulum porttitor massa, quis ultricies felis porta eget. Praesent imperdiet venenatis ligula, non laoreet quam imper lorem ipsum.Praesent imperdiet venenatis ligula, non laorePraesent imperdiet venenatis ligula, non laorePraesent imperdiet venenatis ligula, non laorePraesent imperdiet venenatis ligula, non laore</p>
                <div class="button">
                    <span>
                        <router-link to="/good">MORE</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
    border-bottom: 1px solid rgba(245, 238, 243, 0.15);
    .title {
        color: #fff;
    }
    .content {
        margin-top: 10px;
        display: flex;
        width: 100%;
        .item {
            position: relative;
            padding-bottom: 50px;
            padding: 0 1%;
            flex: 1;
            padding-bottom: 70px;
            border: 1px solid rgba(245, 238, 243, 0.15);
            border-bottom: none;
            border-radius: 5px;
            .title {
                color: #f3f3f3;
                font-size: 18px;
                margin-bottom: 10px;
                padding-bottom: 10px;
                font-weight: 600;
                span {
                    color: #0184ff;
                }
            }
            p {
                font-size: 14px;
                padding: 5px 0;
                color: #787c7f;
                line-height: 1.8em;
            }
            .button {
                a {
                    position: absolute;
                    bottom: 10px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    padding: 10px;
                    display: inline-block;
                    text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.34);
                    background: #0184ff;
                    transition: all 0.3s ease-out;
                    border-radius: 5px;
                    &:hover {
                        background: #006CD2;
                        font-size: 15px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 480px) {
    .main {
        .content {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
