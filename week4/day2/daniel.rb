require "pry"

while true
  puts "Input: "
  input = gets.chomp
  puts input
  returnString = ""
  if input.length == 0
    returnString += "Fine. Be that way! "
  else
    if input.upcase == input
      returnString+= 'Woah, chill out! '
    end
    input.split("").each do |character|
      if character == "?"
        returnString+= "Sure. "
        break
      end
    end
  end
  puts "input: #{input}"
  puts "response: #{returnString}"
end


binding.pry
