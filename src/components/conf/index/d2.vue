<template>
	<div class="mod-left">
		d2 sub module
		<p>$ajax: {{ html }}</p>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				html:''	
			}
		},
		methods:{},
		props: ['bus'],
		mounted(){
			var self = this;
			//this.bus.$emit('a');
			//this.bus.$$on('qq', function(){})	
			this.$ajax.get('http://t.com/demo', {}).then((res) => {
				self.html = JSON.stringify(res);
			});
		}
	}
</script>
