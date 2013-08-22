def ftoc(fahrenheit)
	celsius = (fahrenheit-32)*5.0/9.0
	# The test is FLAWED. There should be a test case where
	# the answer is a floating point number. As it stands,
	# the test will pass even if ftoc does no
	# floating-point math whatsoever.
end

def ctof(celsius)
	fahrenheit = celsius*9.0/5.0 + 32
end