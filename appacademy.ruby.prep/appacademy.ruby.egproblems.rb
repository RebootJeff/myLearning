# Solution for Q1
# Method to perform exponentiation with positive exponents
def pow(base, exponent)
	result = base
	i = 1

	while i < exponent
		result *= base
		i += 1
	end

	return result
end

# test for Q1
puts pow(2, 2)

# Solution for Q2
# Method to calculate sum of array elements
def sum(input_arr)
	i = 0
	result = 0

	while i < input_arr.count
		result += input_arr[i]
		i += 1
	end

	return result
end

# test for Q2
puts sum([1,2,3,4])

# Solution for Q3
# Method for determining whether or not integer input is prime
def is_prime?(num)
	i = 2

	while i < num
		if num % i == 0
			return false
		end
		i += 1
	end

	return true
end

# test for Q3
puts is_prime?(3)

# Solution for Q4
# Method for returning array of prime numbers less than positive, integer input
def primes(max)
	result = []
	i = 2

	while i < max
		if is_prime?(i)
			result << i
		end
		i += 1
	end

	return result
end

# test for Q4
print primes(84)
