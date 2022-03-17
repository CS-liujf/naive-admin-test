import {ref,computed} from "vue"
import {darkTheme} from "naive-ui"

export const isDark=ref(false)
export const theme=computed(()=>{
    return isDark.value ? darkTheme:null
})

export const switchMode=(status =!isDark.value )=>{
    isDark.value = status
}
