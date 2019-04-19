package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clickAllSidebar {
	static String myUserName = "100@accenture.com";
	static String myPassword = "test1234";
	static String newPassword = "1234test";
	
	public static void main(String[] args) throws InterruptedException {		

		System.setProperty("webdriver.chrome.driver","C:/Users/Asus/Desktop/SUTD/T5/Elements of Software Construction/w10/chromedriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/admin");
		
		
		Thread.sleep(3000);
		WebElement username = driver.findElement(By.name("email"));
		
		username.sendKeys(myUserName);

		// now locate the password field in the current page
		WebElement password = driver.findElement(By.id("password"));		

		// send password 
		password.sendKeys(myPassword);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
		Thread.sleep(5000);
		
		WebElement home = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[1]/div/div[2]"));
		home.click();
		Thread.sleep(300);
		
		WebElement tickets = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[2]/div/div[2]"));
		tickets.click();
		Thread.sleep(300);
		
		WebElement realtimechat = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[3]/div/div[2]"));
		realtimechat.click();
		driver.navigate().to("http://localhost:3000/admin");
		Thread.sleep(1000);

		WebElement notification = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[4]/div/div[2]"));
		notification.click();
		Thread.sleep(300);
		
		WebElement category = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[5]/div/div[2]"));
		category.click();
		Thread.sleep(300);
		
		WebElement progress = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[6]/div/div[2]"));
		progress.click();
		Thread.sleep(300);
		
		WebElement deadline = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[7]/div/div[2]"));
		deadline.click();
		
	}
}
