<template>
    <div class="form">
        <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos hic vero ad possimus aliquid ea. Aperiam inventore alias, voluptates ea nam vero! Quam vel, dolor possimus illum voluptate rerum.</div>

        <form>
            <label for="ciaName">COMPANY NAME
                <span class="error" v-if="!$v.ciaName.required && showNameError">Field is required</span>
                <span class="error" v-if="!$v.ciaName.minLength">Name must have at least {{$v.ciaName.$params.minLength.min}} letters.</span>
            </label>
            
            <input
                @blur="showNameError = true"
                v-model="ciaName"
                type="text"
                name="ciaName"
                id="ciaName"
                placeholder="e.g. Your Company Name"
                :class="!$v.ciaName.required && showError ? 'error' : ''">
            
            <label for="ciaSpend">COMPANY SPEND
                <span class="error" v-if="!$v.ciaSpend.required && showError">Field is required</span>
            </label>
            <input
                @blur="showError = true, formatInputSpend()"
                @focus="showError = false"
                v-model="ciaSpend"
                type="text"
                name="ciaSpend"
                id="ciaSpend"
                placeholder="e.g. $150,000"
                :class="!$v.ciaSpend.required && showError ? 'error' : ''">
            <label for="ciaSpenAbility">COMPANY SPEND ABILITY
                <span class="error" v-if="!$v.ciaSpenAbility.required && showError">Field is required</span>
                <span class="error" v-if="checkSpendAbility">First value needs to be smaller than the second</span>
            </label>
            <input
                @blur="formatInputSpendAbility()"
                v-model="ciaSpenAbility"
                type="text"
                name="ciaSpenAbility"
                id="ciaSpenAbility"
                placeholder="e.g. $150,000 - $300,000"
                :class="!$v.ciaSpenAbility.required && showError ? 'error' : ''">

            <label for="notes">NOTES</label>
            <textarea @click="showModal = !showModal" v-model="notes" name="notes" id="notes" placeholder="e.g. Good Tech Company" readonly></textarea>
            <div v-if="showModal" class="modal">
                <div class="modal-box">
                    <div class="modal-title">
                        ADITIONAL NOTES
                        <span 
                            @click="showModal = false; notes == '' ? aditionalNotes = '' : aditionalNotes = notes">X</span>
                    </div>
                    <textarea autofocus class="aditional-notes" name="aditionalNotes" id="aditionalNotes" v-model="aditionalNotes"></textarea>
                    <div class="submit">
                        <button @click.prevent="notes = aditionalNotes; showModal = false">SAVE</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { required, minLength, between, minValue, numeric } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            notes: '',
            aditionalNotes: '',
            showModal: false,
            ciaName: '',
            ciaSpend: '',
            ciaSpenAbility: '',
            showError: false,
            showNameError: false,
            checkSpendAbility: false
        }
    },
    watch: {
        ciaSpend() {
            let regex = RegExp(/^\d+$/)
            if (!regex.test(this.ciaSpend) && !this.showError) {
                this.ciaSpend = ''
            }
        },
        ciaSpenAbility() {
            let regex = RegExp(/[0-9]|-|([0-9])/g)
            if (!regex.test(this.ciaSpenAbility)) {
                this.ciaSpenAbility = ''
            }
        }
    },
    methods: {
        formatInputSpend() {
            this.ciaSpend = this.$filters.currency(this.ciaSpend)
        },
        formatInputSpendAbility() {
            let minSpend = parseInt(this.ciaSpenAbility.split('-')[0])
            let maxSpend = parseInt(this.ciaSpenAbility.split('-')[1])
            if ((minSpend > maxSpend) || (maxSpend < minSpend)) {
                this.checkSpendAbility = true
            }
            if ((minSpend < maxSpend) && (maxSpend > minSpend)) {
                this.checkSpendAbility = false
                this.ciaSpenAbility = this.$filters.currency(minSpend) + ' - ' + this.$filters.currency(maxSpend)
            }
        }
    
    },
    validations: {
        ciaName: {
            required,
            minLength: minLength(10)
        },
        ciaSpend: {
            required
        },
        ciaSpenAbility: {
            required
        }

    },
    beforeCreate() {
        document.body.className = 'company-data'
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
input.error {
    border-color: lightsalmon;
}
span.error {
    font-size: 0.6rem;
    color: lightsalmon;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

.info {
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 25px;
}
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-box {
        min-width: 400px;
        width: auto;
        background-color: #FFF;
        padding: 20px 30px;
        box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.2);
        display: grid;
    }
    .modal-title, .aditional-notes {
        margin-bottom: 20px;
    }
    .modal-title {
        font-size: 0.7rem;
        color: #999;
        span {
            cursor: pointer;
            float: right;
            &:hover {
                font-weight: 700;
            }
        }
    }
    .aditional-notes {
        border-radius: 5px;
        width: auto;
        box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.2);
    }
    .submit {
        text-align: right;
    }
    button {
        background-color: $navLight;
        color: #FFF;
        border: 0;
        border-radius: 3px;
        padding: 8px 35px;
        &:hover {
            background-color: lighten($color: $navLight, $amount: 10);
        }
    }
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
        &[readonly] {
            color: #999;
        }
    }
}
</style>