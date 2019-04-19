package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class clickingRealTimeChatList {
	
	static String myUserName = "100@accenture.com";
	static String myPassword = "test1234";
	static String newPassword = "1234test";
	
	@SuppressWarnings("unchecked")
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

		//driver.get("http://localhost:3000/changepassword");
		
		
		Thread.sleep(3000);
		
		WebElement realtimechat = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[3]/div/div[2]"));
		realtimechat.click();
		Thread.sleep(5000);
		
		for(int i=0; i<1; i++) {
			try {
				WebDriverWait wait = new WebDriverWait(driver, 1000);
				// wait only until the password element becomes visible
				wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/div/div[1]/div[2]/ul/li[1]")));		

				java.util.List<WebElement> List = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/div/div[1]/div[2]/ul/li[1]"));
				System.out.println(List.size());
				System.out.println(List.get(i).getText());
				List.get(i).click();	
				Thread.sleep(1000);
				java.util.List<WebElement> ListContent = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/div/div[2]/div[2]"));
				System.out.println(ListContent.get(i).getText());
			} catch (Exception NoSuchElementException) {
				System.out.println("login name invalid");}
		
		
			}


	}
}

