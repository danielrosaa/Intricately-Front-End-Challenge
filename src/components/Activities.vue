<template>
    <div class="activity">
        <div class="date">{{date}} days ago</div>
        <div class="icon"><img :src="icon" alt=""></div>
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
export default {
    props: [
        'date',
        'icon',
        'text'
    ]
}
</script>
<style lang="scss" scoped>
@import './../styles/variables';
.activity {
    display: flex;
    align-items: center;
    width: auto;
    background-color: #FFF;
    border-top: 0 !important;
    padding: 20px 10px;
    &:not(:first-child) {
        border: 1px solid lighten($color: $navLight, $amount: 30);
    }
    &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    .date {
        flex: 3;
        color: #999;
        font-size: 0.8rem;
    }
    .icon {
        flex: 1;
        img {
            vertical-align: middle;
        }
    }
    .text {
        flex: 8;
    }
}
</style>