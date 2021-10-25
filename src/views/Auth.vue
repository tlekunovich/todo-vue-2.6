<template>
    <!-- <div class="auth-wrapper">
        <h2>Authorization</h2>
        <form class="card" @submit.prevent="onSubmit">
            <div :class="['form-control', { invalid: eError }]">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" @blur="eBlur" />
                <small v-if="eError">{{ eError }}</small>
            </div>

            <div :class="['form-control', { invalid: pError }]">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" @blur="pBlur" />
                <small v-if="pError">{{ pError }}</small>
            </div>

            <button class="btnPrimary" type="submit" :disabled="isSubmitting || isTooManyAttempts">
                Log in
            </button>
            <div class="textDanger" v-if="isTooManyAttempts">
                Too many attempts. Please try again later
            </div>
        </form>
    </div> -->
</template>

<script>
// import { computed, watch } from "@vue/composition-api";
// import { useField, useForm } from "vee-validate";
// // import * as VeeValidate from 'vee-validate';
// import * as yup from "yup";

// export default {
//     setup() {
//         const { handleSubmit, isSubmitting, submitCount } = useForm();
//         const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
//             "email",
//             yup
//                 .string()
//                 .trim()
//                 .required("Please enter your email")
//                 .email("Not a valid e-mail address")
//         );
//         const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
//             "password",
//             yup
//                 .string()
//                 .trim()
//                 .required("Please enter a valid password")
//                 .min(6, "Password must be at least 6 characters long")
//         );

//         const onSubmit = handleSubmit(values => {
//             console.log("formValues", values);
//         });

//         const isTooManyAttempts = computed(() => submitCount.value >= 3);
//         watch(isTooManyAttempts, val => {
//             if (val) {
//                 setTimeout(() => (submitCount.value = 0), 2000);
//             }
//         });

//         return {
//             email,
//             password,
//             eError,
//             pError,
//             eBlur,
//             pBlur,
//             onSubmit,
//             isSubmitting,
//             submitCount,
//             isTooManyAttempts
//         };
//     }
// };
</script>

<style scoped>
/*  */
</style>
