# Generated by Django 2.2.28 on 2022-12-13 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProviderPractices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('practice', models.TextField()),
                ('state', models.TextField()),
                ('website', models.URLField()),
                ('num_org_mem', models.IntegerField()),
            ],
        ),
    ]
