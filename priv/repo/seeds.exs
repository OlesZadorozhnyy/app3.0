alias Myapp.Category
alias Myapp.News
alias Myapp.Repo

for index <- 1..15 do
	Repo.insert!(%Category{
		title: Faker.Lorem.word
	})
end

for index <- 1..20 do
	Repo.insert!(%News{
		category_id: Enum.random(1..15),
		title: Faker.Lorem.sentence,
		description: Faker.Lorem.sentence,
		text: Faker.Lorem.paragraph,
		is_top: Enum.random([:false, :true])
	})
end