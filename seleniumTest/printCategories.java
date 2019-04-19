package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class printCategories {
	static String myUserName = "100@accenture.com";
	static String myPassword = "test1234";
	
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
		password.sendKeys(myPassword);
		
		Thread.sleep(1000);
				
		// login and :)
		WebElement nextButton = driver.findElement(By.id("button"));		

		WebElement label = driver.findElement(By.id("adminLoginForm"));
		label.submit();
		Thread.sleep(5000);
		
		WebElement category = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[4]/div/div[2]"));
		category.click();
		Thread.sleep(300);
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			// wait only until the password element becomes visible
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div[5]")));
			
			WebElement categories = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div[5]"));
			System.out.println(categories.getText());
			
		}catch (Exception NoSuchElementException) {
			System.out.println("login name invalid");}
		}
}
