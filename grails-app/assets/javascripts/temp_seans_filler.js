/*import spock.lang.*
 
class ExceptionHandlerSpec extends Specification {
 
	@FailsWith(NumberFormatException)
	def "Expect a failure using annotation"() {
	expect: Integer.parseInt("99", 8)
	}
	 
	def "Expect a failure"() {
	when:
	Integer.parseInt("99", 8)
	 
	then:
	NumberFormatException e = thrown()
	e.message == 'For input string: "99"'
	}   
	 
	def "Expect a failure not true"() {
	when:
	Integer.parseInt("-2147483648", 10)then:
	notThrown(NumberFormatException )
	}
}*/

var login = function(){
	console.log("whoop!");
	
	$.ajax({
        url: "game/ajax_response",
        type:"post",
        dataType: 'json',
        data:{test: "HECK"},//ids:JSON.stringify(idList), option:option, id:id}
        success: function(data) {
            console.log(data); //<-----this logs the data in browser's console
        },
        error: function(xhr){
            alert(xhr.responseText); //<----when no data alert the err msg
        }
    });
};

var playNow = function(){
	console.log("aggle aggle!");
};

var signup = function(){
	console.log("snarf!");
};