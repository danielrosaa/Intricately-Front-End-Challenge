<template>
    <div class="activity">{{date}}, {{icon}}, {{text}}</div>
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
    width: auto;
    background-color: #FFF;
    &:not(:first-child) {
        border-top: 1px solid lighten($color: $navLight, $amount: 30);
    }
}
</style>