require 'date'

def my_function(num)
	mod = num % 10
	suffix_hash = {
		1 => "st",
		2 => "nd",
		3 => "rd"
	}

	if mod <= 3
		suffix = suffix_hash[mod]
	else
		suffix = "th"
	end

	num.to_s + suffix
end

today = Date.today.strftime("%A")
day_of_month = my_function(1)

puts "Today is #{today} the #{day_of_month} of the month."