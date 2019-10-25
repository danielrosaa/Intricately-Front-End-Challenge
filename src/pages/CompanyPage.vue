<template>
    <div>
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
                <div>ACTIVITIES</div>
                <activities v-for="activity in activityList" 
                    :key="activity.id"
                    :date="activity.date"
                    :icon="activity.icon"
                    :text="activity.text" />
            </div>
            <div class="content-right">
                <div>SIMILAR COMPANIES</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activityList: [
                { id: 1, date: '8 days ago', icon: 'Images/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
                { id: 2, date: '8 days ago', icon: 'Images/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
                { id: 3, date: '8 days ago', icon: 'Images/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
                { id: 4, date: '8 days ago', icon: 'Images/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
                { id: 5, date: '8 days ago', icon: 'Images/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
                { id: 6, date: '8 days ago', icon: 'Images/content-delivery.png', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
            ]
        }
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
    .content-left, .content-right {
        width: 80%;
        background-color: #FFF;
        flex: 1;
        border-radius: 5px;
        border: 1px solid lighten($color: $navLight, $amount: 30);
        div {
            padding: 25px 10px;
            font-size: 0.8rem;
        }
    }
    .content-left {
        margin-right: 20px;
    }
}
</style>