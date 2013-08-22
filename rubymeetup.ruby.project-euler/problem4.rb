def isPalindrome?(num)
	numString = num.to_s
	i = 0
	while i < numString.length/2
		if numString[i] != numString[-i-1]
			return false
		end
		i += 1
	end
	return true
end

def isPalin?(num)
	num.to_s.split('') == num.to_s.split('').reverse
end

startTime = Time.now
num = 998001
divisor = 999
maxPalindrome = 0

while num >= 10000
	if isPalin?(num)
		while divisor >= 100
			if num % divisor == 0 # is num a palindrome and divisible by 3-digit divisor?
				quotient = num / divisor
				if quotient.to_s.length == 3
					maxPalindrome = num
					# cause a break
					divisor = -1
					num = -1
				end
			end
			divisor -= 1
		end
	end
	divisor = 999
	num -= 1
end
puts maxPalindrome
puts Time.now - startTime