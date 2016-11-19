<template lang="html">
	<form>
		Username:<br>
		<input type="text" name="username" v-model="new_user"><br>
		Password:<br>
		<input type="text" name="passw" v-model="new_passw">
		</input>
		<input v-on:click="addUser" type="submit" value="Register">
	</form>
</template>

<script>
	export default {
		methods: {
			addUser: function() {
				// TODO
			}
		}
	}
</script>

<style lang="css">

</style>
