import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const rindevuser = await prisma.user.upsert({
    where: { email: 'rindevuser@labs.io' },
    update: {},
    create: {
      email: 'rindevuser@labs.io',
      name: 'Rindev User',
      posts: {
        create: [
          {
            title: 'My first day at Prisma',
            categories: {
              create: {
                name: 'Office',
              },
            },
            published: true
          },
          {
            title: 'How to connect to a SQLite database',
            categories: {
              create: [{ name: 'Databases' }, { name: 'Tutorials' }],
            },
            content:
              `<h2 style="text-align: left;">Welcome first blog about tinymce</h2>
  <p>Please try out the features provided in this full featured example (excluding <a href="../../../../tinymce/features/">Premium Plugins</a> ).</p>
  <h2>Got questions or need help?</h2>
  <ul>
  <li>Our <a class="mceNonEditable" href="../../6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
  <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
  <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
  </ul>
  <h2>A simple table to play with</h2>
  <table style="border-collapse: collapse; width: 100%;" border="1">
  <thead>
  <tr>
  <th>Product</th>
  <th>Cost</th>
  <th>Really?</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>TinyMCE Cloud</td>
  <td>Get started for free</td>
  <td>YES!</td>
  </tr>
  <tr>
  <td>Plupload</td>
  <td>Free</td>
  <td>YES!</td>
  </tr>
  </tbody>
  </table>
  <h2>Found a bug?</h2>
  <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
  <h2>Finally ...</h2>
  <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
  <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
`
          },
        ],
      },

    },
  })

  const rindevadmin = await prisma.user.upsert({
    where: { email: 'rindevadmin@labs.io' },
    update: {},
    create: {
      email: 'rindevadmin@labs.io',
      name: 'Rindev Admin',
      role: "ADMIN",
      posts: {
        create: [
          {
            title: 'My first blog in rindev.labs.io',
            categories: {
              create: {
                name: 'Office',
              },
            },
            published: true
          },
          {
            title: 'How to connect use and migrate prisma',
            categories: {
              create: [{ name: 'Databases' }, { name: 'Tutorials' }],
            },
          },
        ],
      },

    },
  })

  console.log({ rindevuser, rindevadmin })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })