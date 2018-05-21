defmodule Myapp.News do
  use Myapp.Web, :model

  schema "news" do
    field :title, :string
    field :description, :string
    field :text, :string
    field :is_top, :boolean

    belongs_to :category, Myapp.Category

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:category_id, :title, :description, :text, :is_top])
    |> validate_required([:category_id, :title, :description, :text])
    |> validate_length(:title, max: 200)
  end
end