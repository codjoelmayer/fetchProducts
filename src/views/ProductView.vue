<template>
    <div class="container">
        <div class="row">
            <h1 class="display-1">Products</h1>
        </div>
        <div class="row my-3">
            <SpinnerComponent v-if="!products"/>
            <div v-else class="card-wrapper d-flex gap-3 flex-wrap">
                <div class="card" v-for="product in products" :key="product.id">
                    <img :src="product.image" class="card-img-top img-fluid" :alt="product.make">
                    <div class="card-body">
                        <h5 class="card-title">Make: {{product.make}}</h5>
                        <p class="card-text">Spec: {{product.spec}}</p>
                        <p class="lead">Price: {{ product.amount }}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue';
export default {
    components: {
        SpinnerComponent
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>
