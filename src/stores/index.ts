import {defineStore} from 'pinia'
import {computed, reactive, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
	let LoginIdentity = ref(-1)
	let userId = ref(-1)
	let userInfo = reactive({
		id: "",
		identity:	"",
		resume: "",
		starCompany: [],
		starPositions: [],
		record: "",
})
	const count = ref(0)
	const POST_CONFIG = ref({headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

	let double = computed(count => count * 2)

	function increment() {
		count.value++
	}

	return {isAlreadyLogin: LoginIdentity, count, double, POST_CONFIG, increment}
})