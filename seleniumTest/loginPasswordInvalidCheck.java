package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class loginPasswordInvalidCheck {
	static String myUserName = "100@accenture.com";
	static String myWrongUserName = "1001@accenture.com";
	static String myPassword = "test1234";
	static String myWrongPassword1 = "test12345";
	static String myWrongPassword2 = "test1234567";
	static String myWrongPassword3 = "test123456723r4546";
	
	public static void main(String[] args) throws InterruptedException {		

		System.setProperty("webdriver.chrome.driver","C:/Users/Asus/Desktop/SUTD/T5/Elements of Software Construction/w10/chromedriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/admin");
		
		
		Thread.sleep(3000);
		WebElement username = driver.findElement(By.name("email"));
		
		username.sendKeys(myUserName);

		// now locate the password field in the current page
		WebElement password = driver.findElement(By.id("password"));		
		System.out.println(password);
		// send password 
		password.sendKeys(myWrongPassword1);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
		Thread.sleep(1000);
		WebElement wrongPassword = driver.findElement(By.xpath("//*[@id=\"adminLoginForm\"]/div[3]/div/p"));
		System.out.println("Wrong Password");
		System.out.println(wrongPassword.getText());
		
		password.sendKeys(myWrongPassword2);
		label.submit();
		System.out.println(wrongPassword.getText());
		Thread.sleep(1000);
		password.sendKeys(myWrongPassword3);
		label.submit();
		System.out.println(wrongPassword.getText());
		WebElement wrongPassword3x = driver.findElement(By.xpath("//*[@id=\"adminLoginForm\"]/div[3]/div/span"));
		System.out.println(wrongPassword3x.getText());
			
		}
}
