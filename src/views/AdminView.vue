<template>
  <div class="container">
    <div class="row">
      <h1 class="display-1">Admin</h1>
    </div>
    <div class="row my-3">
      <div class="button-wrapper d-flex">
        <button
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addProducts"
        >
          Add Product
        </button>
        <div
          class="modal fade"
          id="addProducts"
          tabindex="-1"
          aria-labelledby="addProductsLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-center " id="addProductsLabel">
                  Add Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form class="container">
                    <div class="row">
                        <label class="form-label text-start" for="make">Enter your laptop's make</label>
                        <input class="form-control" id="make" type="text" placeholder="Laptop's make" v-model="make" required>
                    </div>
                    <div class="row">
                        <label class="form-label text-start" for="spec">Enter your laptop's specification</label>
                        <textarea id="spec" v-model="spec" class="form-control" required></textarea>
                    </div>
                    <div class="row">
                        <label class="form-label text-start" for="amount">Enter your laptop's amount</label>
                        <input class="form-control" id="amount" v-model="amount" type="number" placeholder="amount" required>
                    </div>
                    <div class="row">
                        <label class="form-label text-start" for="image">Image's url</label>
                        <input class="form-control" id="image" v-model="image" type="text" placeholder="Image's url" required>
                    </div>
                    <div class="row">
                        <label class="form-label" ></label>
                    </div>
                </form>
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-success" @click="sortByProductId">
          Sorting
        </button>
      </div>
    </div>
    <div class="row">
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
              <img class="img-fluid" :src="product.image" :alt="product.make" />
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
  data() {
    return {
        id: null,
        make: null,
        spec: null,
        amount: null,
        image: null,
        sorted: true,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    errMsg() {
        return this.$store.state.errMsg
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    sortByProductId() {
      this.products.sort((a, b) => b.id - a.id);
    },
    addProduct() {
        try{
            this.id = this.products.map((a)=> a.id).at(-1) + 1;

        }catch(e) {
            console.log(e);
        }
    },
  },
};
</script>
