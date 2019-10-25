<template>
    <div class="form">
        <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos hic vero ad possimus aliquid ea. Aperiam inventore alias, voluptates ea nam vero! Quam vel, dolor possimus illum voluptate rerum.</div>

        <form>
            <label for="ciaName">COMPANY NAME</label>
            <input type="text" name="ciaName" id="ciaName" placeholder="e.g. Your Company Name">

            <label for="ciaName">COMPANY SPEND</label>
            <input type="text" name="ciaSpend" id="ciaSpend" placeholder="e.g. $150,000">

            <label for="ciaName">COMPANY SPEND ABILITY</label>
            <input type="text" name="ciaSpenAbility" id="ciaSpenAbility" placeholder="e.g. $150,000 - $300,000">

            <label for="ciaName">NOTES</label>
            <textarea name="ciaName" id="ciaName" placeholder="e.g. Good Tech Company"></textarea>
        </form>
    </div>
</template>

<script>
export default {
    beforeCreate() {
        document.body.className = 'company-data';
        document.getElementsByTagName('footer')[0].className = 'company-data footer-bg';
    }
}
</script>

<style lang="scss" scoped>
@import './../styles/variables';
.form {
    border: 1px solid lighten($color: $navLight, $amount: 30);
    border-radius: 6px;
    padding: 20px;
}
.info {
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 25px;
}
form {
    display: grid;
    label {
        margin-bottom: 5px;
        color: #999;
        font-size: 0.7rem;
    }
    input, textarea {
        border: 1px solid $borderColorLight;
        border-radius: 2px;
        padding: 0 10px;
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    }
    input {
        margin-bottom: 10px;
        width: 60%;
        height: 30px;
        &::placeholder {
            color: #CCC
        }
    }
    textarea {
        resize: none;
        padding-top: 10px; 
        width: auto;
        height: 200px;
        &::placeholder {
            color: #CCC
        }
    }
}
</style>