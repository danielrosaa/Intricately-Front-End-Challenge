<template>
    <div class="page">
        <div class="header">
            <img src="./../Images/Company Page/squares.png" alt="Microsoft Logo">
            <div class="title">
                <span>Microsoft</span>
                <span><fa-icon icon="map-marker-alt"></fa-icon> Redmond, WA USA</span>
            </div>
        </div>
        <div class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos hic vero ad possimus aliquid ea. Aperiam inventore alias, voluptates ea nam vero! Quam vel, dolor possimus illum voluptate rerum.
        </div>
        <div class="content">
            <div class="content-left">
                <div class="tile-title">ACTIVITIES</div>
                <activities v-for="activity in activityList" 
                    :key="activity.id"
                    :date="activity.date"
                    :icon="activity.icon"
                    :text="activity.text" />
            </div>
            <div class="content-right">
                <div class="tile-title">SIMILAR COMPANIES</div>
                <div class="content-right-content">
                    <div>Content</div>
                    <div>Another content</div>
                </div>
                <div class="tile-title">COMPANY SPEND HISTORY</div>
                <div class="content-right-content">
                    <div>Content</div>
                    <div>Another content</div>
                    <div>One more</div>
                </div>
                <div class="tile-title">COMPANY SPEND HISTORY</div>
                <div class="content-right-content">
                    <div>Content</div>
                    <div>Another content</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['activityList'])
    },
    beforeCreate() {
        document.getElementsByTagName('body')[0].className = 'company-page';
        document.getElementsByTagName('footer')[0].className = 'company-page footer-bg';
    }
}
</script>

<style lang="scss" scoped>
@import './../styles/variables';
.header {
    display: flex;
    img {
        background-color: #FFF;
        padding: 15px;
        margin-right: 10px;
        border-radius: 8px;
        box-shadow: 0px 5px 12px -5px rgba(0, 0, 0, 0.5);
    }
    .title {
        display: grid;
        span:first-child {
            font-size: 2rem;
        }
        span:last-child {
            text-align: center;
            font-size: 0.8rem;
            color: #999;
        }
    }
}

.info {
    margin: 20px 0;
    font-size: 1rem;
    line-height: 25px;
}

.content {
    display: flex;
    .tile-title {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        max-height: 47px;
        padding: 15px;
        background-color: #FFF;
    }
    .content-left, .content-right {
        width: 80%;
        flex: 1;
        border-radius: 5px;
        div {
            border: 1px solid lighten($color: $navLight, $amount: 30);
            // padding: 25px 10px;
            font-size: 0.8rem;
            &:first-child {
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
            }
        }
    }
    .content-left {
        margin-right: 20px;
    }
    .content-right {
        background-color: transparent;
        // display: grid;
        // div:not(.content-right-content) {
        //     border-top-left-radius: 6px;
        //     border-top-right-radius: 6px;
        // }
        .content-right-content {
            background-color: #FFF;
            border-top: 0;
            padding: 0;
            div {
                border: 0;
                padding: 20px;
                &:nth-child(1) {
                    background-color: lightcyan;
                }
                &:nth-child(2) {
                    background-color: lightgoldenrodyellow;
                }
                &:nth-child(3) {
                    background-color: lightpink;
                }
            }
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
}
</style>