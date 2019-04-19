package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class dashboardSidebarSelectors {
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
		
		//category
		WebElement category = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[5]/div/div[2]"));
		category.click();
		Thread.sleep(300);
		
		java.util.List<WebElement> selectors = driver.findElements(By.id("open-chat-bot"));
		System.out.println(selectors.size());
		
		// print all the links
		for (int i = 0; i < selectors.size(); i=i+1) {
			System.out.println(i + " " + selectors.get(i).getText());
		}

		for(int i = 0; i < selectors.size(); i++)
		{
			
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					System.out.println(i + ""+ selectors.get(i).isSelected());
					if ( selectors.get(i).isSelected()==false)
					{
					     selectors.get(i).click();
					     System.out.println("Check Box is Checked");
					     Thread.sleep(1000);
					}
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
		
		for(int i = 0; i < selectors.size(); i++)
		{
			
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					System.out.println(i + ""+ selectors.get(i).isSelected());
					if ( !selectors.get(i).isSelected())
					{
					     selectors.get(i).click();
					     System.out.println("Check Box is Checked");
					     Thread.sleep(1000);
					}
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
		
		//Progress 
		WebElement progress = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[6]/div/div[2]"));
		progress.click();
		Thread.sleep(1000);
		
		java.util.List<WebElement> progressselectors = driver.findElements(By.id("open-chat-bot"));
		System.out.println(progressselectors.size());
		
		// print all the links
		for (int i = 0; i < progressselectors.size(); i=i+1) {
			System.out.println(i + " " + progressselectors.get(i).getText());
		}

		for(int i = 0; i < progressselectors.size(); i++)
		{
			
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					System.out.println(i + ""+ progressselectors.get(i).isSelected());
					if ( progressselectors.get(i).isSelected()==false)
					{
						progressselectors.get(i).click();
					     System.out.println("Check Box is Checked");
					     Thread.sleep(1000);
					}
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
		
		for(int i = 0; i < progressselectors.size(); i++)
		{
			
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					System.out.println(i + ""+ progressselectors.get(i).isSelected());
					if ( !progressselectors.get(i).isSelected())
					{
						progressselectors.get(i).click();
					     System.out.println("Check Box is Checked");
					     Thread.sleep(1000);
					}
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
		
		//deadline 
		WebElement deadline = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[1]/div/div[7]/div/div[2]"));
		deadline.click();

	}
}
