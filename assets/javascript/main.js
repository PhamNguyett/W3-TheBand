const buyBtns= document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose= document.querySelector('.js-modal-close')
const modalContainer=document.querySelector('.js-modal-container')
const modalPay=document.querySelector('.js-modal-pay')

//Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTicket()
{
    modal.classList.add('open')
}

//Lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTicket)
}

//Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function closeBuyTicket()
{
    modal.classList.remove('open')
}

//Nghe hành vi click 
modalClose.addEventListener('click',closeBuyTicket)
modal.addEventListener('click',closeBuyTicket)
modalContainer.addEventListener('click',function(event)
{
    event.stopPropagation()
})

modalPay.addEventListener('click',closeBuyTicket)
