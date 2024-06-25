# Next Builder

## What is Next Builder?(en)

Next Builder is a CLI tool designed to streamline the process of creating organized components and pages in a Next.js v14 project using TypeScript and the app router. It automates the creation of files and directories, ensuring a consistent structure and helping developers focus on writing code rather than setting up files and directories.

## Next Builder Nedir?(tr)

Next Builder, TypeScript ve app router kullanan Next.js v14 projelerinde düzenli bileşenler ve sayfalar oluşturmayı sağlayan bir CLI aracıdır. Dosya ve dizinlerin oluşturulmasını otomatikleştirir, tutarlı bir yapı sağlar ve geliştiricilerin dosya ve dizin kurulumlarıyla uğraşmak yerine kod yazmaya odaklanmasına yardımcı olur.

## How to Use

### How to Install

```sh
npm install -g next-builder
```
### How to Create a Page

To create a new page, use the `cp` (create page) command. The command will generate the necessary files and directories based on the provided options.

### Sayfa Nasıl Oluşturulur

Yeni bir sayfa oluşturmak için `cp` (create page) komutunu kullanın. Komut, sağlanan seçeneklere göre gerekli dosya ve dizinleri oluşturacaktır.

#### Example Usage:

```sh
# Create a new page with the name 'MyPage'
# 'MyPage' adında yeni bir sayfa oluşturun
next-builder cp MyPage
# Folders structure for this example : app/(pages)/MyPage

# Create a new page with an author name and group
# Yaratıcı ismi ve grup ile yeni bir sayfa oluşturun
next-builder cp MyPage -a "Author Name" -g "MyGroup"
# Folders structure for this example : app/(pages)/(MyGroup)/MyPage

# Create a new page in a specific directory
# Belirli bir dizinde yeni bir sayfa oluşturun
next-builder cp MyPage -d "my-directory"
# Folders structure for this example : app/(pages)/my-directory/MyPage

# Create a new page with parallel routing enabled
# Paralel yönlendirme etkin olan yeni bir sayfa oluşturun
next-builder cp MyPage -p -d parallel
# Folders structure for this example : app/(pages)/parallel/@MyPage
```

### How to Create a Component(en)

To create a new component, use the `cc` (create component) command. The command will generate the necessary files and directories based on the provided options.

### Bileşen Nasıl Oluşturulur(tr)

Yeni bir bileşen oluşturmak için `cc` (create component) komutunu kullanın. Komut, sağlanan seçeneklere göre gerekli dosya ve dizinleri oluşturacaktır.

#### Example Usage:

```sh
# Create a new component with the name 'MyComponent'
# 'MyComponent' adında yeni bir bileşen oluşturun
next-builder cc MyComponent
# Folders structure for this example : app/components/MyComponent
# Ornek için dosya yapısı : app/components/MyComponent

# Create a new component with an author name
# Yaratıcı ismi ile yeni bir bileşen oluşturun
next-builder cc MyComponent -a "Author Name"

# Create a new component in a specific directory
# Belirli bir dizinde yeni bir bileşen oluşturun
next-builder cc MyComponent -d "my-directory"
# Folders structure for this example : app/components/my-directory/MyComponent
# Ornek için dosya yapısı : app/components/my-directory/MyComponent


### Additional Information(en)
- The CLI tool assigns a default background color to each page and component.
- Components are given simple props which are useful for TypeScript.

### Ek Bilgiler(tr)
- CLI aracı, her sayfa ve bileşene varsayılan bir arka plan rengi at
- Bileşenlere, TypeScript için yararlı olan basit özellikler verilir.