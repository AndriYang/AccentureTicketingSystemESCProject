package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class clickingCalender {
	
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

		//driver.get("http://localhost:3000/changepassword");
		
		
		Thread.sleep(3000);

		
		java.util.List<WebElement> links = driver.findElements(By.id("titlename"));
		System.out.println(links.size());
		
		//calendar
//		java.util.List<WebElement> calendar = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div[5]/div/div[1]/div/div/div/div[2]/div[1]/div[1]/div/input"));
//		System.out.println(calendar.size());
		
		java.util.List<WebElement> calendar = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div[5]/div/div[1]/div/div/div/div[2]/div[1]/div[1]/div/input"));
		System.out.println(calendar.size());
		
//		java.util.List<WebElement> calendarSelect = driver.findElements(By.xpath("//*[@id=\"todo-add-form\"]/div"));
//		System.out.println(calendarSelect.size());
		
		
		
		// maximize the browser window
//		driver.manage().window().maximize();
		
		// print all the links
		for (int i = 0; i < 1; i=i+1) {
			System.out.println(i + " " + links.get(i).getText());
			//System.out.println(i + " " + calendar.get(i).getText());
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					links.get(i).click();
					calendar.get(i).click();
					Thread.sleep(1000);
					links.get(i).click();
					Thread.sleep(1000);
					staleElementLoaded = false;
				}catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
			}
			
	
		}
		}
		
		
		
	}

}
