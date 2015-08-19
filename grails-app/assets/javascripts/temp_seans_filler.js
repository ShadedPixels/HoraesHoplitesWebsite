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
};

var playNow = function(){
	console.log("aggle aggle!");
};

var signup = function(){
	console.log("snarf!");
};