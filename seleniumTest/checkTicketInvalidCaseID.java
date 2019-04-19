package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class checkTicketInvalidCaseID {
	
	static String myCaseId = "1554561272445";
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
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"input-case-id\"]")));		
			// now locate the password field in the current page
			WebElement authorFirstName = driver.findElement(By.xpath("//*[@id=\"input-case-id\"]"));
			authorFirstName.sendKeys(myCaseId);

			Thread.sleep(1000 );
			WebElement create = driver.findElement(By.xpath("//*[@id=\"submit-case-id-button\"]"));
			create.click();
			Thread.sleep(300);
			
			
		} catch (Exception NoSuchElementException) {
			System.out.println("login name invalid");}
	}
	
}
