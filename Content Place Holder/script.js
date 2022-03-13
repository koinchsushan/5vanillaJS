const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')
setTimeout(getData,2500)

function getData(){
    header.innerHTML='<img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" srcset="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, saepe.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/7.jpg" alt="" srcset="">'
    names.innerHTML = 'John Snow'
    date.innerHTML = 'Dec 17, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}