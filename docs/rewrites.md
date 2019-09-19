---
{
"title": "Topic evaluation",
"lang": "en-US"
}

---
# Topic evaluation

I thought it would be a good idea to provide a few samples of rewrites to demonstrate how I think through topic writing.

## Sample 1

> #### Powering on and off
> Connect power and power on the XYZ system after you have connected all of the equipment that you will use with it. Make sure that the system is powered off before you connect devices to it. It is important to note that XYZ systems do not have what you might think of as a power button—they have a power proximity sensor. Instead of pressing an actual button that moves, you touch the sensor (or near the sensor) that indicates power  on the front of the system.

*I believe this topic can use a few updates. First, the topic has a task title, but it's not in task format. Second, it tells the customer about a feature not present. I would include only the necessary information. Third, this topic includes information about first-time setup. It should be updated to reflect that.*

*Also, we don't know how close to the sensor we should get or how sensitive the sensor is. Is it possible to get too close and accidently turn of the unit? Researching this topic, I would make sure to address this.*

### Rewrite

#### Powering on the XYZ for the first time (in a first time setup chapter)

------
**NOTE:** The product powers on with a proximity sensor switch. The proximity sensor detects movement up to two inches.

------

------

**NOTE:** Only connect peripheral devices when the product is powered off.

------

1. Connect all peripheral devices.
2. Connect power to the product.
3. Power on the product using the proximity power switch located on the front right-side.



# Sample 2

This one is from the PingID Administration Guide

## Reset your Admin portal password

If you forget your password to the PingOne Admin portal, reset it from the login page.

------
**NOTE:** If you enter the wrong credentials three times your account is locked for a 15 minute period, during which you cannot access your account.

------

**Steps**

1. From the Admin portal login page, click **Change My Password**.
   The Recover Password screen is shown.
2. Enter your email address and click **Submit**.
   You'll receive an email link with details of how to reset your password.
   
### Evaluation
The topic discusses resetting the password, but uses the word 'credentials'. I would use 'password' throughout. This topic assumes the customer knows their email address as they're asked to provide it for a password reset. 

I didn't consider whether or not this is a shared note in the database. If so, I understand using credentials as this note may exist in other PingID topics.

### Rewrite

Here, I'd try to minimize a few lines.

* I'd update the introduction:

  If you forget your PingOne portal password, reset it from the login page.

* I'd update the note to read:
   **NOTE:** Entering the wrong password three times results in a 15 minute account lock.
* I'd update the last line:
   You'll receive a password reset email.