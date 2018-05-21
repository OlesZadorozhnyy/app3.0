alias Myapp.Category
alias Myapp.News
alias Myapp.Repo

for index <- 1..5 do
	Repo.insert!(%Category{
		title: "Title: "
	})
end

for index <- 1..5 do
	Repo.insert!(%News{
		category_id: index,
		title: Faker.Lorem.sentence,
		description: Faker.Lorem.sentence,
		text: Faker.Lorem.paragraph
	})
end