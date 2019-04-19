package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class clickRealTimeChatbot {
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
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div/button/img")));
			
			WebElement clickChatbot = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div/button/img"));
			clickChatbot.click();
			Thread.sleep(500);
			
			
			WebElement clickChatbot4 = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div/div/form/input"));
			clickChatbot4.sendKeys("dfasfdsfsd");
			
			WebElement clickSubmit = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div/div/form/button"));
			clickSubmit.click();
			
			Thread.sleep(1000);
			clickChatbot.click();
			
		}catch (Exception NoSuchElementException) {
			System.out.println("login name invalid");}
		}
}
