from selenium import webdriver
from time import sleep
driver = webdriver.Chrome(r'E:\谷歌\chromedriver.exe')
driver.get('http://localhost:8000/#/orders/all_orders')
sleep(5)
ele=driver.find_element_by_xpath('//main//div')
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div[1]/div')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div[2]/button[1]')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[2]/form/div/div[1]/div/div[2]/div/span/div/div/div')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[2]/form/div/div[2]/div/div[2]/div/span/div/div')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[2]/form/div/div[3]/div/div[2]/div/span/div/div/div')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div[2]/button[2]')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[2]/form/div/div[4]/div/div[1]/div/div[2]/div/span/span/span[1]/div/input')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[1]/div[2]/form/div/div[4]/div/div[2]/div/div[2]/div/span/span/span[1]/div/input')
ele.click()
sleep(1)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[2]/div/button')
ele.click()
sleep(2)
ele=driver.find_element_by_xpath('//*[@id="/orders$Menu"]/li[1]')
ele.click()
sleep(2)
ele=driver.find_element_by_xpath('//*[@id="root"]/div/div/section/section/main/div/div[1]/div[2]/div/div/div/div[4]/div[1]/div')
ele.click()
pass 
