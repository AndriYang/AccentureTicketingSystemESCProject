package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class loginWithInvalidLongEmailI {
	static String myWrongUserName = "1001vczgdsgdsgfdxvsfgsdfsdfsdfsdfsdfdfdfdfdsfsdfsdfdsfsdfsdaccentuStarting ChromeDriver 73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72) on port 11513\r\n" + 
			"Only local connections are allowed.\r\n" + 
			"Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.\r\n" + 
			"Apr 09, 2019 8:38:25 PM org.openqa.selenium.remote.ProtocolHandshake createSession\r\n" + 
			"INFO: Detected dialect: OSS\r\n" + 
			"[[ChromeDriver: chrome on XP (a61a1fb127297a099baad299534a084c)] -> id: @password]\r\n" + 
			"Wrong Password\r\n" + 
			"Login Failedre.com";
	static String myPassword = "test1234";
	
	public static void main(String[] args) throws InterruptedException {		

		System.setProperty("webdriver.chrome.driver","C:/Users/Asus/Desktop/SUTD/T5/Elements of Software Construction/w10/chromedriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/admin");
		
		
		Thread.sleep(3000);
		WebElement username = driver.findElement(By.name("email"));
		
		username.sendKeys(myWrongUserName);

		// now locate the password field in the current page
		WebElement password = driver.findElement(By.id("password"));		
		System.out.println(password);
		// send password 
		password.sendKeys(myPassword);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
		Thread.sleep(1000);
		WebElement wrongEmail = driver.findElement(By.xpath("//*[@id=\"adminLoginForm\"]/div[3]/div/p"));
		System.out.println("Wrong Email");
		System.out.println(wrongEmail.getText());
			
		}
}
