package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clickingNavbarAfterLogin {
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
			
		Thread.sleep(3000);
		
		java.util.List<WebElement> changeButton = driver.findElements(By.tagName("a"));
		System.out.println(changeButton.size());
		
		for (int i = 0; i < changeButton.size(); i=i+1) {
			System.out.println(i + " " + changeButton.get(i).getAttribute("href"));
		}
		
		for(int i = 0; i < changeButton.size()-1; i++)
		{
			System.out.println("*** Navigating to" + " " + changeButton.get(i).getAttribute("href"));
			if (changeButton.get(i).getAttribute("href") == null)
				continue;
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					driver.navigate().to(changeButton.get(i).getAttribute("href"));
					Thread.sleep(4000);
					//driver.navigate().back();
					changeButton = driver.findElements(By.tagName("a"));
					System.out.println("*** Navigated to" + " " + changeButton.get(i).getAttribute("href"));
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
	}

}
