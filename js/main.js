$(document).ready( function() {

//	
});

function sendData(form) {

		var phones =[];
		var objform ={};

		for (var i = 0; i < form.length -1; i++) {
			if(form[i].name == "email"){

				objform["email"] = form[i].value;

			}else{
				phones.push(form[i].value);
			
			}
		}
		objform["phones"] = phones;
		console.log(JSON.stringify(objform));
	    //console.log('form = ', JSON.stringify($(form).serializeArray()));
	    return false
	}

	function addPhone(phone) {

		$(phone[0]).clone().prependTo(".phones");

      }

	function removePhone(phone) {
	    //console.log('Remove phone -->', phone);

	    var numPhones = $('input[name=phone]').length;

	    if(numPhones != 1){
	     phone.remove();
	   }

	    // TODO: Пример удаления телефона
	    // phone.remove();
	}