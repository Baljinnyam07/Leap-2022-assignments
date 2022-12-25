const arr = ['Red', 'Green', 'White', 'Black']

const body = document.body
const form = document.createElement('form')
body.appendChild(form)

const select = document.createElement('select')
form.appendChild(select)
select.setAttribute('id', 'colorSelect')

const input = document.createElement('input')
form.appendChild(input)
input.setAttribute('type', 'button')
input.setAttribute('value', 'Select and Remove')


let count = '';
for(i=0;i<arr.length;i++){
    
    const option = document.createElement('option')
    option.innerHTML = arr[i];
    count += arr[i] + "\n"

    select.appendChild(option)

    
}
window.confirm(count)






