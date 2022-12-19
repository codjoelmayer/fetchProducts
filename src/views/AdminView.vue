<template>
    <div class="container">
        <div class="row">
            <h1 class="display-1">Admin</h1>
        </div>
        <div class="row my-3">
            <div class="button-wrapper d-flex ">
                <button class="btn btn-success">Add Product</button>
                <button class="btn btn-success">Sorting</button>    
            </div>
        </div>
        <div class="row ">
            <table class="table table-responsive table-success table-striped">
                <thead>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Specs</th>
                    <th>Amount</th>
                    <th>Image</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.make }}</td>
                        <td>{{ product.spec }}</td>
                        <td>R{{ product.amount }}</td>
                        <td>
                            <img class="img-fluid" :src="product.image" :alt="product.make">
                        </td>
                        <td>
                            <div class="d-grid gap-3">
                                <button class="btn btn-success">Edit</button>
                                <button class="btn btn-success">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    }
}
</script>