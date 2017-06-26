require 'pry'
require_relative "coffee.rb"

c_array = []
options_list = ["hazelnut", "whipped cream", "chocolate syrup"]

def list_all c_array
  c_array.each do |c|
    if !c.collected
      puts c
    end
  end
end

def make_order c_array, options_list
  puts "what coffee do you want today?"
  coffee = gets.chomp.upcase
  puts "how many sugur do you want?"
  sugar = gets.chomp
  puts "what size do you want?"
  size = gets.chomp
  option = get_options options_list
  puts "can i have your name please?"
  name = gets.chomp
  c = Coffee.new(coffee, sugar, size, name, option)
  c_array.push(c)
  return c
end

def get_options options_list
  puts "what option do you want? 0 for no option"
  options_list.each_with_index do |element, index|
    puts "#{index+1}. #{element}"
  end
  option = gets.chomp.to_i

  if option < 0 || option > options_list.length
    puts "invalid selection, please try again"
    get_options options_list
  end

  if option == 0
    return nil
  end

  return options_list[option-1]

  return option
end


make_order c_array, options_list

binding.pry
