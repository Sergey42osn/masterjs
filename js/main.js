$(document).ready( function() {

//	
});

function sendData(form) {

		var phones =[];
		var arrayform ={};

		for (var i = 0; i < form.length -1; i++) {
			if(form[i].name == "email"){
				//alert(form[i].value);
				arrayform["email"] = form[i].value;
				//alert(JSON.stringify(arrayform));
			}else{
				phones.push(form[i].value);
				//alert(JSON.stringify(phones));	
			}
		}
		arrayform["phones"] = phones;
		console.log(JSON.stringify(arrayform));
	    //console.log('form = ', JSON.stringify($(form).serializeArray()));
	    return false
	}

	function addPhone(phone) {

        $( ".add" ).before( 
        '<label>phone-$ :' +
        '<input name="phone" type="text"> '   +  
        '<i onclick="removePhone($(this).parent())" class="fa fa-times" aria-hidden="true"></i>'    +
        '</label>'                  
        );

          //console.log('add Phone');
      //    ...
      }

	function removePhone(phone) {
	    //console.log('Remove phone -->', phone);

	    var NumberofElements;
	    NumberofElements = $('.phones').children().length;

	    if(NumberofElements != 2){
	     phone.remove();
	   }

	    // TODO: Пример удаления телефона
	    // phone.remove();
	}