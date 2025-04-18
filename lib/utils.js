export default function truncateText(text){
    return text.length <= 100 ? text : text.slice(0, 100) + '...'
}

export function formatDate(dateString){
   const date = new Date(dateString)

   return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   })
}

export function getAppInfo(){
    return{
        app_version: '1.0',
        app_name: 'simple-blog',
        app_author: 'nir'
    }
}