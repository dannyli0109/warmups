require "pry"

lunch_order = {}


while true
  puts("Name for order:")
  name = gets.chomp
  if lunch_order[name] == nil
    lunch_order[name] = {}
  end

  puts("#{name} wants to order:")
  item = gets.chomp

  if lunch_order[name][:items] == nil
    lunch_order[name][:items] = []
  end
  lunch_order[name][:items].push(item)

  puts("Add another item to the order? (y/n)")
  response = gets.chomp.downcase
  while !(response == "y" || response == "n")
    puts("invalid input please try again")
    response = gets.chomp
  end

  if response == "n"
    break
  end
end

lunch_order.each do |name,value|
  print "#{name} ordered a "

    while value[:items].length > 0
      print "#{value[:items].pop} "
      if value[:items].length == 1
        print "& "
      elsif value[:items].length > 1
        print ", "
      end
    end
    print "\n"
end

binding.pry
