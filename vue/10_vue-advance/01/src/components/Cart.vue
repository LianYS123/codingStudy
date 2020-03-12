<template>
	<div>
		<p>商品列表</p>
		<hr />
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>名称</th>
					<th>价格</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in items" :key="index">
					<td>{{index}}</td>
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>
						<button @click="addCart(item)">加入购物车</button>
					</td>
				</tr>
			</tbody>
		</table>
		<hr />
		<p>购物车</p>
		<table>
			<thead>
				<tr>
					<th>
						全选
						<input @change="selectAllHandler" type="checkbox" />
					</th>
                    <th>#</th>
					<th>名称</th>
					<th>价格</th>
					<th>数量</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in cart" :key="index">
					<td>
						<input type="checkbox" :checked="item.check" :name="item.name" />
					</td>
					<td>{{index}}</td>
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>
						{{item.count}}
						<button @click="add(item.id)">+</button>
						<button @click="sub(item.id)">-</button>
						<button @click="remove(item.id)">移除</button>
					</td>
				</tr>
				<tr>
					<td>总价</td>
					<td>{{sum}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checkAll: true,
				cart: [], //{ name: "javascirpt", price: 10, check:true, count:0 }
				items: [
					{ id: 1, name: "javascirpt", price: 10 },
					{ id: 2, name: "java", price: 15 },
					{ id: 3, name: "python", price: 20 },
					{ id: 4, name: "c++", price: 30 }
				]
			};
        },
        created(){
          let cart = localStorage.getItem('cart'); 
          this.cart = cart ? JSON.parse(cart) : [];
        //   console.log(this.cart);
        },
		methods: {
			addCart(item) {
				let cItem = this.cart.find(ite => ite.id === item.id);
				if (cItem) {
					cItem.count += 1;
				} else {
					this.cart.push({ ...item, check: true, count: 1 });
				}
			},
			add(id) {
				let cItem = this.cart.find(ite => ite.id === id);
				if (cItem) {
					cItem.count += 1;
				}
			},
			sub(id) {
				let cItem = this.cart.find(ite => ite.id === id);
				if (cItem && cItem.count) {
					cItem.count -= 1;
				}
			},
			remove(id) {
				this.cart = this.cart.filter(item => item.id !== id);
			},
			selectAllHandler() {
                // this.cart = this.cart;
				if (this.cart.some(item => !item.check)) {
					this.cart.map(item => (item.check = true));
					this.checkAll = true;
				} else {
					this.cart.map(item => (item.check = false));
					this.checkAll = false;
				}
			}
		},
		computed: {
			sum() {
				return this.cart.reduce(
					(sum, item) => (item.check ? sum + item.price * item.count : 0),
					0
				);
			}
		},
		watch: {
			cart: {
				deep: true,
				handler(cart) {
					localStorage.setItem('cart',JSON.stringify(cart))
				}
			}
		}
	};
</script>

<style>
</style>