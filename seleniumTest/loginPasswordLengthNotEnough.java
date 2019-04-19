package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class loginPasswordLengthNotEnough {
	static String myUserName = "100@accenture.com";
	static String myWrongPassword = "test";
	
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
		password.sendKeys(myWrongPassword);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
		Thread.sleep(1000);
		WebElement wrongEmail = driver.findElement(By.xpath("//*[@id=\"adminLoginForm\"]/div[3]/div/p"));
		System.out.println("Wrong Password");
		System.out.println(wrongEmail.getText());
		WebElement wrongPasswordLength = driver.findElement(By.xpath("//*[@id=\"adminLoginForm\"]/div[2]/span"));
		System.out.println("Wrong wrongPasswordLength");
		System.out.println(wrongPasswordLength.getText());
			
		}
}
