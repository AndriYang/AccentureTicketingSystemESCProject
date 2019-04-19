package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class cannotCreateTicket {
	static String myFirstName = "Valine";
	static String myLastName = "Tine";
	static String myEmail = "andri_susanto@mymail.sutd.edu.sg";
	static String myPhone = "90593729";
	static String mySelection = "IT";
	static String myTitle = "How Are You";
	static String myContent = "I am good!";
	public static void main(String[] args) throws InterruptedException {		

		System.setProperty("webdriver.chrome.driver","C:/Users/Asus/Desktop/SUTD/T5/Elements of Software Construction/w10/chromedriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:3000/");
		
		Thread.sleep(1000);
		
		WebElement customer = driver.findElement(By.id("customer"));
		customer.click();
		
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			// wait only until the password element becomes visible
			wait.until(ExpectedConditions.elementToBeClickable(By.id("authorFirstName")));		
			// now locate the password field in the current page
			WebElement authorFirstName = driver.findElement(By.id("authorFirstName"));
			authorFirstName.sendKeys(myFirstName);
			WebElement authorLastName = driver.findElement(By.id("authorLastName"));
			authorLastName.sendKeys(myLastName);
			WebElement email = driver.findElement(By.id("email"));
			email.sendKeys(myEmail);
			

			Select selectors = new Select(driver.findElement(By.id("sel")));
			System.out.println(selectors.getOptions());
			selectors.selectByVisibleText(mySelection);
			
			WebElement title = driver.findElement(By.id("title"));
			title.sendKeys(myTitle);
			
			WebElement content = driver.findElement(By.id("content"));
			content.sendKeys(myContent);
			
			WebElement imageUpload = driver.findElement(By.id("imageUpload"));
			imageUpload.sendKeys("C:\\Users\\Asus\\Desktop\\SUTD\\T5\\Leader and Follower\\Presentation\\Capture");
			Thread.sleep(10000 );
			WebElement create = driver.findElement(By.id("create"));
			create.click();
			Thread.sleep(300);
			
			
		} catch (Exception NoSuchElementException) {
			System.out.println("login name invalid");}
	}
	
}
